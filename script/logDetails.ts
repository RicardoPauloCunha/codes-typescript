// union - defini que uma variavel pode ter outros tipos
// type alias - "Cria um novo tipo"
type Uid = number | string | undefined;

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}

// Define exatamento o que pode ser (os valores)
type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform)
{
    return platform;
}

renderPlatform("Linux");

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Ricardo");
logInfo("123", "Ricardo");
