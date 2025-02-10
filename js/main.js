function dateFormat(dateSrt) {
    const date = new Date(dateSrt);
    return String(date.getDate()).padEnd(2, "0") + "."
        + String(date.getMonth() + 1).padStart(2, "0") + "."
        + date.getFullYear() + " "
        + String(date.getHours()).padStart(2, "0") + ":"
        + String(date.getMinutes()).padStart(2, "0");
}
