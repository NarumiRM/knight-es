Hooks.on('init', () => {
    const module = {
        module: 'knight-es',
        lang: 'es',
        dir: 'compendium',
    };

    if (foundry.utils.isNewerVersion(game.version, 12)) {
        if (game.babele) {
            game.babele.register(module);
        }
    } else {
        if (typeof Babele !== 'undefined') {
            Babele.get().register(module);
        }
    }
});