
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab is hidden!');
    } else {
        console.log('Tab is visible!');
    }
});
