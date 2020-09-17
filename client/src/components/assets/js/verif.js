export const verifName = (string) => {
    if (string === '') {
        return 'Ce champ ne peut pas être vide.';
    } else if (string.match(/[\d]/) !== null) {
        return 'Votre nom ne doit pas contenir chiffre.';
    } else {
        return true;
    };
};

export const verifEmail = (string) => {
    if (string === '') {
        return 'Ce champ ne peut pas être vide.';
    } else if (
        string.match(/(.){2,}(@){1}(.){2,}(\.){1}(.){2,}/) === null ||
        string.match(/[\s]/) !== null
    ) {
        return 'Votre adresse mail n\'est pas valide.';
    } else {
        return true;
    };
};

export const verifMessage = (string) => {
    if (string === '') {
        return 'Ce champ ne peut pas être vide.';
    } else if (string.length < 20) {
        return 'Votre message doit contenir au moins 20 caractères.'
    } else if (string.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/) !== null) {
        return 'Votre message ne peut pas contenir de lien.';
    } else {
        return true;
    }
};