function setTheme() {
    const root = document.documentElement
    const newTheme = root.className;
    if (newTheme === "dark") {
        root.className = 'light'
    }else if (newTheme === "light") {
        root.className = 'dark'
    }
    console.log(root.className);
    
}

const themeSwitch = document.querySelector('#toggle')
themeSwitch.addEventListener('click', setTheme
)
