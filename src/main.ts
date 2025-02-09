import { MainComponent } from './components/MainComponent/MainComponent';
import './fonts.css'
import './style.css'

async function setup() {
  const main = new MainComponent();

  await main.render();
}

setup();
