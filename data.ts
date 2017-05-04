export function getRandomItems(rows = 100) {
    const randomRows = [];
    for (let i = 0; i <= rows; i += 1) {
        const randomTitle = Math.random().toString(36).substring(2);
        randomRows.push({
            title: randomTitle,
            img: `http://lorempixel.com/800/500/sports/${randomTitle}`
        });
    }
    return randomRows;
}

