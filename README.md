# rollup-sass


webpack은 ES Module 형태로 번들을 할 수 없습니다. webpack을 사용 할 때에는 일반적으로 commonjs 형태로 번들링을 하게 되는데, commonjs로 번들링한 라이브러리를 나중에 다른 프로젝트에서 사용하게 되면 Tree-shaking이 지원되지 않습니다.


Babel을 이용하면 ES6 이상의 최신 문법으로 작성한 자바스크립트 코드를 ES5 이하의 예전 문법으로 작성한 것 처럼 소스 코드 내의 문법의 형태를 변경할 수 있습니다. 이렇게 Babel을 통해 문법 형태가 바뀐 소스 코드는 최신 문법을 지원하는 실행 환경 뿐만 아니라 아직 최신 문법들이 적용되지 않은 실행 환경에서도 문제없이 작동하게 됩니다.




## 설치 

* rollup 

```
npm install -D rollup 
```

* rollup-plugin-node-resolve:  외부 노드 모듈을 사용시 (node_modules 디렉토리)
* rollup-plugin-commonjs : 외부 노드 모듈이 es6 으로 변환되지 않았을 경우 es6 으로 변환
```
npm install -D  @rollup/plugin-node-resolve
npm install -D  @rollup/plugin-commonjs
```




package.json
```
npm install -D @rollup/plugin-json
```



CSS용 플러그인.


* rollup-plugin-postcss : postcss 도구 지원
* autoprefixer: -webkit- 등의 prefix 없이 스타일을 지정할 수 있게 도와준다.
* postcss-import: CSS @import 룰을 사용할 수 있게 해 준다.로컬 파일,  노드 모듈 또는 web_modules를 사용할 수 있다.



```
npm install -D  rollup-plugin-postcss
npm install -D  autoprefixer
npm install -D  postcss-import
```




rollup-plugin-postcss 는
saas
와
node-saas를 필요로한다. 


saas는 최근에 dart로 만들었다. 
```
npm install -D saas
```


node-saas는 이제 안쓴다. 






```
npm install --save-dev rollup-plugin-scss@3 

```





postcss-load-config

필요한 모든 PostCSS 플러그인을 설치하고 package.json 종속성/devDependencies에 저장합니다.

그런 다음 다음 형식 중 하나를 선택하여 PostCSS 구성 파일을 만듭니다.

