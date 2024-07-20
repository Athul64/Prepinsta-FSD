function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
    let fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    console.log(fortune);
}

tellFortune(2, 'Niklaus Mikaelson', 'New Orleans', 'Product Manager');
tellFortune(2, 'Caroline Forbes', 'Mytsic falls', 'Software Developer');
tellFortune(1, 'Stefan Salvatore', 'Mytsic falls', 'Graphic Designer');
