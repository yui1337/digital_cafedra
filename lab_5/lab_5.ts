// ========== Часть 1 (Таймеры) ==========

function getCurrentDate() {
    console.log(Date.now());
}
window.onload = function () {
    var intervalId = setInterval(getCurrentDate, 5000);
    setTimeout(function () {
        clearInterval(intervalId);
        console.log("Прошла 1 минута");
    }, 60000);
};

// ========== Часть 2 (Замыкания) ==========
function createClosureLogger(): () => void {
    let counter = 0;
    const prefix = 'Вызов №';

    // Возвращаемая функция использует переменные из внешней области
    return () => {
        counter++;
        console.log(`${prefix}${counter} в ${new Date().toLocaleTimeString()}`);
    };
}

// Использование
const logger = createClosureLogger();

logger(); // Вызов №1 в 14:30:15
logger(); // Вызов №2 в 14:30:16
logger(); // Вызов №3 в 14:30:17