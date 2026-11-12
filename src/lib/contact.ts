/**
 * Contato direto, em pedaços. O endereço e o telefone nunca são escritos
 * inteiros no HTML nem em script: quem junta é o navegador, na hora do uso.
 * Raspador que lê o código-fonte não encontra o que colher.
 */
export const mailParts = { user: 'hey', domain: 'gimigliano.blog' } as const;

/** só sai no papel; na tela não há onde clicar num telefone */
export const phoneParts = ['+55 11 95173', '4126'] as const;
