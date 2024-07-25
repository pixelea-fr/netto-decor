wp.domReady(function() {
    function initializeBlockVariation() {
        var currentPostId = parseInt(myEditorVars.currentPostId, 10);
        var currentPostType = wp.data.select('core/editor').getCurrentPostType();

        console.log('Vérification - Type de post actuel:', currentPostType, 'ID du post:', currentPostId);

        if (currentPostType === 'projet' && !isNaN(currentPostId)) {
            wp.blocks.registerBlockVariation('core/query', {
                name: 'exclude-current-projet',
                title: 'Projets (sans le courant)',
                description: 'Affiche une liste de projets en excluant le projet actuel',
                isDefault: true,
                attributes: {
                    query: {
                        postType: 'projet',
                        exclude: [currentPostId],
                        perPage: 10
                    }
                },
                innerBlocks: [
                    ['core/post-template', {}, [
                        ['core/post-title'],
                        ['core/post-excerpt']
                    ]],
                    ['core/query-pagination']
                ]
            });
            console.log('Variation de bloc "Projets (sans le courant)" enregistrée. ID exclu:', currentPostId);
        } else {
            console.log('Conditions non remplies pour enregistrer la variation de bloc');
        }
    }

    // Fonction pour vérifier si l'éditeur est prêt
    function checkEditorReady() {
        var currentPostType = wp.data.select('core/editor').getCurrentPostType();
        if (currentPostType) {
            initializeBlockVariation();
        } else {
            setTimeout(checkEditorReady, 100); // Vérifier à nouveau dans 100ms
        }
    }

    // Démarrer la vérification
    checkEditorReady();
});
