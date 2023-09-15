const themeToggle = document.getElementById('darkmode-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Verificar se o botão de alternância está marcado inicialmente (tema escuro)
if (themeToggle.checked) {
    themeStylesheet.href = 'css/dark.css';
}

themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
        // Mudar para o tema escuro (altera o href para dark.css)
        themeStylesheet.href = '/css/dark.css';
    } else {
        // Mudar para o tema claro (altera o href para light.css)
        themeStylesheet.href = '/css/light.css';
    }
});

// $(document).ready(function() {
//     const themeToggle = $('#darkmode-toggle');
//     const themeStylesheet = $('#theme-stylesheet');

//     // Verificar se o botão de alternância está marcado inicialmente (tema escuro)
//     if (themeToggle.prop('checked')) {
//         themeStylesheet.attr('href', 'dark.css');
//     }

//     themeToggle.change(function() {
//         if (themeToggle.prop('checked')) {
//             // Mudar para o tema escuro (altera o href para dark.css)
//             themeStylesheet.attr('href', 'dark.css');
//         } else {
//             // Mudar para o tema claro (altera o href para light.css)
//             themeStylesheet.attr('href', 'light.css');
//         }
//     });
// });