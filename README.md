# ionic-angular-examples
Repositório com apps de exemplos para aprender ionic.

Estou com algum problema com relação a rodar os testes. Se tira o projeto da pasta e rodar, vai rodar os testes. Se tentar rodar assim o `ts-loader` não roda.

**Update** 
Consegui fazer funcionar mudando o nome da pasta principal. 

Descobri que apenas quando tem o nome "ionic-angular" o ts-loader não carrega. "ionic_angular" funciona e todos os outros nomes que testei.

---

Notas sobre todos os projetos em geral.

To use lazy loading in Ionic you have to put the rootpage as `string`.

```ts
rootpage:string = 'LoginPage' 
```


Remove the `back` button after the user logged in.

```ts
this.navCtrl.setRoot('Inbox');
```

Naming convetion for observable is `authenticatedUser$` this dollar sign at the end.
