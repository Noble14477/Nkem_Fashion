export const slideIn = {
    hidden:{
        x: "-100vw"
    },
    visible:{
        x: -0,
        transition: {
            duration: 1.2,
            staggerChildren:1,
        }
    }
}

export const slideOut = {
    hidden:{
        x: "100vw"
    },
    visible:{
        x: -0,
        transition: {
            duration: 1,
        }
    }
}

export const zoomOut = {
    hidden:{
        x: "100vw",
        opacity: 0,
    },
    visible:{
        x: -0,
        opacity: 1,
        transition: {
            duration: 2,
        }
    }
}