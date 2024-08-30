document.addEventListener('DOMContentLoaded', function() {
    const initialScreen = document.getElementById('initialScreen');
    const clientLoginScreen = document.getElementById('clientLoginScreen');
    const registerScreen = document.getElementById('registerScreen');
    const clientScreen = document.getElementById('clientScreen');
    const adminScreen = document.getElementById('adminScreen');
    const adminLoginScreen = document.getElementById('adminLoginScreen');
    const historyScreen = document.getElementById('historyScreen');

    const clientBtn = document.getElementById('clientBtn');
    const adminBtn = document.getElementById('adminBtn');
    const backToInitialBtn = document.getElementById('backToInitialBtn');
    const backToClientLoginBtn = document.getElementById('backToClientLoginBtn');
    const backToInitialBtnAdmin = document.getElementById('backToInitialBtnAdmin');
    const logoutClient = document.getElementById('logoutClient');
    const logoutAdmin = document.getElementById('logoutAdmin');
    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    const backToClientBtn = document.getElementById('backToClientBtn');
    const goToRegisterBtn = document.getElementById('goToRegisterBtn');

    const registerForm = document.getElementById('registerForm');
    const clientLoginForm = document.getElementById('clientLoginForm');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminAddItemForm = document.getElementById('adminAddItemForm');
    const productsList = document.getElementById('productsList');

    const clientMeatOptions = document.getElementById('clientMeatOptions');
    const adminMeatOptions = document.getElementById('adminMeatOptions');

    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Navegação Entre Telas
    clientBtn.addEventListener('click', function() {
        initialScreen.classList.add('hidden');
        clientLoginScreen.classList.remove('hidden');
    });
    
    adminBtn.addEventListener('click', function() {
        initialScreen.classList.add('hidden');
        adminLoginScreen.classList.remove('hidden');
    });

    backToInitialBtn.addEventListener('click', function() {
        registerScreen.classList.add('hidden');
        clientLoginScreen.classList.add('hidden');
        initialScreen.classList.remove('hidden');
    });

    backToClientLoginBtn.addEventListener('click', function() {
        registerScreen.classList.add('hidden');
        clientLoginScreen.classList.remove('hidden');
    });

    backToInitialBtnAdmin.addEventListener('click', function() {
        adminLoginScreen.classList.add('hidden');
        initialScreen.classList.remove('hidden');
    });

    logoutClient.addEventListener('click', function() {
        clientScreen.classList.add('hidden');
        initialScreen.classList.remove('hidden');
    });

    logoutAdmin.addEventListener('click', function() {
        adminScreen.classList.add('hidden');
        initialScreen.classList.remove('hidden');
    });

    viewHistoryBtn.addEventListener('click', function() {
        clientScreen.classList.add('hidden');
        historyScreen.classList.remove('hidden');
    });

    backToClientBtn.addEventListener('click', function() {
        historyScreen.classList.add('hidden');
        clientScreen.classList.remove('hidden');
    });

    goToRegisterBtn.addEventListener('click', function() {
        clientLoginScreen.classList.add('hidden');
        registerScreen.classList.remove('hidden');
    });

    // Cadastro de Cliente
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const clientName = document.getElementById('clientName').value.trim();
        const clientEmail = document.getElementById('clientEmail').value.trim();
        const clientPassword = document.getElementById('clientPassword').value.trim();

        if (!clientName || !clientEmail || !clientPassword) {
            alert('Todos os campos são obrigatórios!');
            return;
        }

        if (clients.find(c => c.email === clientEmail)) {
            alert('E-mail já cadastrado!');
            return;
        }

        const client = {
            name: clientName,
            email: clientEmail,
            password: clientPassword
        };

        clients.push(client);
        localStorage.setItem('clients', JSON.stringify(clients));
        alert('Cadastro realizado com sucesso!');
        registerScreen.classList.add('hidden');
        clientLoginScreen.classList.remove('hidden');
    });

    // Login de Cliente
    clientLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();

        const client = clients.find(c => c.email === loginEmail && c.password === loginPassword);

        if (client) {
            alert('Login realizado com sucesso!');
            clientLoginScreen.classList.add('hidden');
            clientScreen.classList.remove('hidden');
        } else {
            alert('Email ou senha incorretos!');
        }
    });

    // Login de Administrador
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const adminUser = document.getElementById('adminUser').value.trim();
        const adminPassword = document.getElementById('adminPassword').value.trim();

        if (adminUser === 'Guilherme' && adminPassword === 'Guil050504') {
            alert('Login de administrador bem-sucedido!');
            adminLoginScreen.classList.add('hidden');
            adminScreen.classList.remove('hidden');
            displayProducts();
        } else {
            alert('Usuário ou senha de administrador incorretos!');
        }
    });

    // Adicionar Produto
    adminAddItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const itemName = document.getElementById('adminItemName').value.trim();
        const itemPrice = parseFloat(document.getElementById('adminItemPrice').value.trim());
        const itemCategory = document.getElementById('adminItemCategory').value.trim();

        if (!itemName || isNaN(itemPrice) || !itemCategory) {
            alert('Todos os campos são obrigatórios e o preço deve ser um número válido!');
            return;
        }

        const product = {
            name: itemName,
            price: itemPrice,
            category: itemCategory
        };

        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        alert('Produto adicionado com sucesso!');
        adminAddItemForm.reset();
        displayProducts();
    });

    // Exibir Produtos
    function displayProducts() {
        productsList.innerHTML = '';
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - R$${product.price.toFixed(2)} (${product.category})`;
            productsList.appendChild(listItem);
        });
    }

    // Mostrar/Ocultar opções de carne no administrador
    document.getElementById('adminItemCategory').addEventListener('change', function() {
        if (this.value === 'carnes') {
            adminMeatOptions.classList.remove('hidden');
        } else {
            adminMeatOptions.classList.add('hidden');
        }
    });

    // Mostrar/Ocultar opções de carne no cliente
    document.getElementById('itemCategory').addEventListener('change', function() {
        if (this.value === 'carnes') {
            clientMeatOptions.classList.remove('hidden');
        } else {
            clientMeatOptions.classList.add('hidden');
        }
    });

    // Inicializar a lista de produtos ao carregar a página
    displayProducts();
});
