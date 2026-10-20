import fs from 'node:fs';
import path from 'node:path';
const content=JSON.parse(fs.readFileSync('frontend/src/content.json','utf8'));
const html=fs.readFileSync('dist/index.html','utf8');
for(const [route,page]of Object.entries(content.pages)){if(route==='/')continue;const dir=path.join('dist',route);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html.replace('<title>Esgrow Studio</title>',`<title>${page.title}</title>`));}
fs.writeFileSync('dist/404.html',html);
fs.writeFileSync('dist/routes.json',JSON.stringify(Object.keys(content.pages)));
// Static hosts can serve each known route directly; Express serves the SPA with
// correct status codes. No API is simulated in the static preview.
