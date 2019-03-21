pragma solidity 0.4.8; 
// doc: https://solidity.readthedocs.io/en/v0.5.3/types.html

contract Types {

    // Inteiro de 256 bits
    uint x;
    uint x = 45;
    int a = 78; 

    //definindo constante
    int constant variable1 = 8;
    // definindo uma variavel int de 256 bits
    int256 constant variable2 = 8; 

    uint8 b;
    int64 c;
    uint248 e;

    // Let's also check the typecasting
    int x = int(b);

    // Boleano
    bool b = true; 

    // inferindo o tipo
    var a = true;

    // Aqui tempos um tipo especial, address, que corresponde a o endereço de um usuário
    address public owner;

    // Bytes de  1-32  bytes
    byte a; 
    bytes2 b;
    bytes32 c;

    // byte de tamanho dinamico
    
    bytes m; 
    // string
    string n = "hello"; 
    
    // array de bytes com o número de posições definidas
    bytes32[5] nicknames; 

    // array dinâmico de bytes
    bytes32[] names; 

    // ao adicionar um valor em um  array, ele retorna a posição inserida.
    uint newLength = names.push("John"); 

    // Dictionary
    mapping (string => uint) public balances;

    // enuns
    enum State { Created, Locked, Inactive }; 

}