 const IsDue = (date: string) => {
    if (date.toString().trim() === new Date().toISOString().slice(0, 10)) {
        return true;
    } else {
        return false;
    }
}

export {IsDue}