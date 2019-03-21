pragma solidity 0.4.8; 


contract Functions {
//    |- palavra reservada
//    |               |--- tipo de função
//    |               |           |---- tipo do retorno 
//    |               |           |       
//    |               |           |
    function hello() public view return(string) {
        return 'world';
    }

/*
    Tipos de funções 

        modificadores: public, private

        tipos:
            - view ou const => a função retorna dados e não modifica o contrato;
            - pure => a função não lê o contrato, muito menos modifica o contrato;
            - payable => é possível enviar criptomoedas junto;
*/

}