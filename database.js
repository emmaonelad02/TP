//simuler une base de donnée

let task = [
    
  { id: 1, title: 'titre', description: '...', createdAt: new Date(), finished: false, priority: 2 },
  { id: 2, title: 'titre', description: '....', createdAt: new Date(), finished: false, priority: 1 },
  // Autres tâches...
];

// Fonction pour récupérer toutes les tâches
function getAllTasks() {
  return tasks;
}

// Exporte la fonction pour qu'elle soit accessible depuis d'autres fichiers
module.exports = {
  getAllTasks
};
