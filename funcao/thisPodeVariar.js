// this é sempre o objeto que está sendo referenciado num contexto
// this pode variar quando temos uma função tradicional com () { }
// se for um arrow function, o this não varia nunca!
// o this vai ser definido no momento que a função for definida e no contexto que a função foi escrita
// dá para impedir o this de mudar em uma função normal, usando bind