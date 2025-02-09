import { MainComponent } from './components/MainComponent/MainComponent';
import './style.css'

async function setup() {
  const main = new MainComponent();

  await main.render();
}

setup();
