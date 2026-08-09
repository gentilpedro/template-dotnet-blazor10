// Tema claro/escuro.
//
// Carregado de forma bloqueante no <head> (Components/App.razor) para que o
// tema seja aplicado antes do primeiro paint e não haja flash de tela clara.
// Usa `data-bs-theme` no <html>, que é o mecanismo nativo do Bootstrap 5.3.
(function () {
    'use strict';

    var STORAGE_KEY = 'theme';
    var media = window.matchMedia('(prefers-color-scheme: dark)');

    // Preferência explícita do usuário, ou null se ele nunca escolheu.
    function stored() {
        try {
            var value = localStorage.getItem(STORAGE_KEY);
            return value === 'light' || value === 'dark' ? value : null;
        } catch (e) {
            return null;
        }
    }

    function resolve() {
        return stored() || (media.matches ? 'dark' : 'light');
    }

    function apply() {
        var theme = resolve();
        var root = document.documentElement;

        root.setAttribute('data-bs-theme', theme);
        root.style.colorScheme = theme;

        var toggles = document.querySelectorAll('[data-theme-toggle]');
        for (var i = 0; i < toggles.length; i++) {
            toggles[i].setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        }
    }

    function set(theme) {
        try {
            if (theme === 'light' || theme === 'dark') {
                localStorage.setItem(STORAGE_KEY, theme);
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch (e) {
            /* localStorage indisponível: o tema vale só para esta sessão */
        }
        apply();
    }

    window.appTheme = {
        /** 'light' | 'dark' — tema em uso no momento. */
        current: resolve,
        /** 'light' | 'dark' fixa a escolha; qualquer outro valor volta a seguir o sistema. */
        set: set,
        toggle: function () {
            set(resolve() === 'dark' ? 'light' : 'dark');
        },
        /** Reaplica o tema no DOM (usado após a navegação aprimorada do Blazor). */
        apply: apply
    };

    apply();

    // Sem escolha explícita, acompanha o tema do sistema em tempo real.
    media.addEventListener('change', function () {
        if (!stored()) {
            apply();
        }
    });
})();
