// Configurazione script.js
const CONFIG = {
    credentials: {
        email: 'test@test.com',
        password: 'password'
    },
    distances: {
        near: 100,
        medium: 200
    },
    buttonStates: {
        default: 'default',
        near: 'mouse-near',
        medium: 'medium-distance',
        far: 'far-distance',
        running: 'running'
    },
    animations: {
        runningDuration: 300
    }
};

// Classe per la gestione delle credenziali
class CredentialsManager {
    constructor(validEmail, validPassword) {
        this.validEmail = validEmail;
        this.validPassword = validPassword;
    }

    validate(email, password) {
        return email === this.validEmail && password === this.validPassword;
    }
}

// Classe per la gestione dello stato del bottone
class ButtonStateManager {
    constructor(button) {
        this.button = button;
        this.wasNearMouse = false;
        this.states = CONFIG.buttonStates;
    }

    updateText(isValid) {
        this.button.textContent = isValid ? 'Login' : 'Prendimi';
    }

    updateState(newState) {
        const allStates = Object.values(this.states);
        allStates.forEach(state => this.button.classList.remove(state));
        if (newState) this.button.classList.add(newState);
    }

    markAsNear() {
        this.wasNearMouse = true;
    }

    reset() {
        this.wasNearMouse = false;
        this.updateState(null);
    }
}

// Classe per il calcolo delle distanze e posizioni
class PositionCalculator {
    static getDistance(x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }

    static getRandomPosition(container, element, mouseX, mouseY, minDistance) {
        const rect = container.getBoundingClientRect();
        const maxX = rect.width - element.offsetWidth;
        const maxY = rect.height - element.offsetHeight;
        
        let newX, newY;
        let attempts = 0;
        const maxAttempts = 10;

        do {
            newX = Math.random() * maxX;
            newY = Math.random() * maxY;
            attempts++;
            
            if (attempts > maxAttempts) break;
        } while (
            this.getDistance(
                newX, 
                newY, 
                mouseX - rect.left, 
                mouseY - rect.top
            ) < minDistance
        );

        return { x: newX, y: newY };
    }
}

// Classe principale per la gestione del bottone
class LoginButton {
    constructor(elements) {
        this.elements = elements;
        this.credentialsManager = new CredentialsManager(
            CONFIG.credentials.email, 
            CONFIG.credentials.password
        );
        this.stateManager = new ButtonStateManager(elements.loginBtn);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.elements.buttonArea.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.elements.loginBtn.addEventListener('click', this.handleClick.bind(this));
        [this.elements.emailInput, this.elements.passwordInput].forEach(input => {
            input.addEventListener('input', this.handleInput.bind(this));
        });
    }

    handleMouseMove(e) {
        if (this.isLoginValid()) return;

        const rect = this.elements.loginBtn.getBoundingClientRect();
        const buttonCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };

        const distance = PositionCalculator.getDistance(
            e.clientX, e.clientY,
            buttonCenter.x, buttonCenter.y
        );

        this.updateButtonColorByDistance(distance);

        if (distance < CONFIG.distances.near) {
            this.moveButton(e.clientX, e.clientY);
        }
    }

    updateButtonColorByDistance(distance) {
        if (distance < CONFIG.distances.near) {
            this.stateManager.updateState(CONFIG.buttonStates.near);
            this.stateManager.markAsNear();
        } else if (distance < CONFIG.distances.medium) {
            this.stateManager.updateState(CONFIG.buttonStates.medium);
        } else {
            this.stateManager.updateState(CONFIG.buttonStates.far);
        }
    }

    moveButton(mouseX, mouseY) {
        const pos = PositionCalculator.getRandomPosition(
            this.elements.buttonArea,
            this.elements.loginBtn,
            mouseX,
            mouseY,
            CONFIG.distances.near
        );

        this.elements.loginBtn.style.left = pos.x + 'px';
        this.elements.loginBtn.style.top = pos.y + 'px';

        if (this.stateManager.wasNearMouse) {
            this.stateManager.updateState(CONFIG.buttonStates.running);
            setTimeout(() => {
                this.stateManager.updateState(CONFIG.buttonStates.far);
            }, CONFIG.animations.runningDuration);
        }
    }

    handleClick() {
        if (this.isLoginValid()) {
            this.elements.welcome.classList.remove('hidden');
            this.elements.formContainer.classList.add('hidden');
            this.resetButton();
        }
    }

    handleInput() {
        const isValid = this.isLoginValid();
        this.stateManager.updateText(isValid);
        
        if (isValid) {
            this.resetButton();
        }
    }

    isLoginValid() {
        return this.credentialsManager.validate(
            this.elements.emailInput.value,
            this.elements.passwordInput.value
        );
    }

    resetButton() {
        this.elements.loginBtn.style.position = 'static';
        this.elements.loginBtn.style.transform = 'translate(-50%, -50%)';
        this.stateManager.reset();
    }

    initialize() {
        this.stateManager.updateText(false);
        this.elements.loginBtn.style.left = '50%';
        this.elements.loginBtn.style.top = '50%';
        this.elements.loginBtn.style.transform = 'translate(-50%, -50%)';
    }
}

// Inizializzazione
const loginButton = new LoginButton({
    loginBtn: document.getElementById('loginBtn'),
    emailInput: document.getElementById('email'),
    passwordInput: document.getElementById('password'),
    welcome: document.getElementById('welcome'),
    buttonArea: document.querySelector('.button-area'),
    formContainer: document.querySelector('.form-container')
});

loginButton.initialize();
