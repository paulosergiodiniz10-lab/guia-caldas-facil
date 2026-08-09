// Importa as funções necessárias do SDK do Firebase v9 (compatível com módulos de navegador)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// SUAS CHAVES DO FIREBASE! 
const firebaseConfig = {
    apiKey: "AIzaSyDCrdkV7_A3kUdvfOEfkpYhUZgfzEhEAfM",
    authDomain: "guia-caldas-facil.firebaseapp.com",
    projectId: "guia-caldas-facil",
    storageBucket: "guia-caldas-facil.firebasestorage.app",
    messagingSenderId: "46826988375",
    appId: "1:46826988375:web:64a22b576e24c181d1d412"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Torna o banco de dados acessível globalmente (para outros arquivos poderem usar)
window.db = db;
window.doc = doc;
window.getDoc = getDoc;

// === MOCK DE DADOS PARA DESENVOLVIMENTO INICIAL ===
// Como o seu Firestore ainda está vazio, criei uma simulação para o site funcionar
// enquanto você cadastra as empresas reais no painel do Firebase.

const mockDatabase = {
    "piratas-pizzaria": {
        name: "Piratas Pizzaria",
        category: "Gastronomia",
        rating: "4.8",
        description: "A pizzaria mais temática e divertida de Caldas Novas! Traga sua família para uma verdadeira aventura pirata enquanto saboreia as melhores pizzas da região. Espaço kids, rodízio e à la carte.",
        address: "Av. Orcalino Santos, 123 - Centro, Caldas Novas",
        status: "Aberto agora",
        phone: "5564999999999", 
        coverUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
        logoUrl: "https://placehold.co/150x150/112240/facc15?text=PP",
        coupons: [
            { title: "15% OFF no Rodízio", rules: "Válido de Terça a Quinta", code: "PIRATA15" },
            { title: "Sobremesa Grátis", rules: "Na compra de 1 Pizza G", code: "DOCEPIRATA" }
        ]
    },
    "aurion-energy": {
        name: "Aurion Energy",
        category: "Serviços",
        rating: "5.0",
        description: "Energia Solar por Assinatura. Economize até 25% na sua conta de luz sem investir nada em painéis solares. Nós geramos a energia e você recebe o desconto direto na conta da Enel.",
        address: "Atendimento Digital - Caldas Novas",
        status: "Atendimento 24h (Online)",
        phone: "5564988888888",
        coverUrl: "https://images.unsplash.com/photo-1509391366360-1288cfa69f37?q=80&w=1200&auto=format&fit=crop",
        logoUrl: "https://placehold.co/150x150/0b284e/ffffff?text=AE",
        coupons: []
    }
};

window.getCompanyMockData = (id) => {
    return mockDatabase[id] || null;
};
