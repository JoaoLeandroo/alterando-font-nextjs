O nextJS possui sua propria biblioteca de fonts do google, para altera alguma fonte
basta ir até o layout.jsx e adicionar a fonte desejada,
após fazer as alterações e implementar a fonte desejada para o projeto,
adicionar, as weight das fontes.
ex:

const roboto = Roboto({ subsets: ['latin'], weight: [
  '100',
  '300',
  '400',
  '500',
  '700',
  '900'
] })