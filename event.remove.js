var onUncaughtException = function (error) {
    console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^..!');

    process.removeListener('uncaughtException', onUncaughtException)
};

process.on('uncaughtException', onUncaughtException);

setInterval(function () {
    error.error.error('^_^');
}, 2000);