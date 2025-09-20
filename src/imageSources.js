import headshotWebp from './assets/images/headshot.png?format=webp';
import headshotPng from './assets/images/headshot.png';
import contactCardWebp from './assets/images/contact-card.jpeg?format=webp';
import contactCardJpeg from './assets/images/contact-card.jpeg';
import instructorsWebp from './assets/images/private-swimming-lessons-instructors.jpg?format=webp';
import instructorsJpg from './assets/images/private-swimming-lessons-instructors.jpg';
import poolWebp from './assets/images/pool.jpg?format=webp';
import poolJpg from './assets/images/pool.jpg';
import headerSignatureWebp from './assets/images/cMitchellHeader-noBG-H100.png?format=webp';
import headerSignaturePng from './assets/images/cMitchellHeader-noBG-H100.png';
import headerLogoWebp from './assets/images/freshlogo.png?format=webp';
import headerLogoPng from './assets/images/freshlogo.png';
import nicoleWaltonWebp from './assets/images/nicole-walton.jpg?format=webp';
import nicoleWaltonJpg from './assets/images/nicole-walton.jpg';
import gailRuckerWebp from './assets/images/gail-rucker.png?format=webp';
import gailRuckerPng from './assets/images/gail-rucker.png';
import raquelJohnsonWebp from './assets/images/raquel-johnson.png?format=webp';
import raquelJohnsonPng from './assets/images/raquel-johnson.png';
import boonieJohnsonWebp from './assets/images/boonie-johnson.jpg?format=webp';
import boonieJohnsonJpg from './assets/images/boonie-johnson.jpg';
import feasterWebp from './assets/images/feaster.jpg?format=webp';
import feasterJpg from './assets/images/feaster.jpg';
import jenStowersWebp from './assets/images/jen-stowers.jpg?format=webp';
import jenStowersJpg from './assets/images/jen-stowers.jpg';
import adelineWebp from './assets/images/adeline.jpg?format=webp';
import adelineJpg from './assets/images/adeline.jpg';
import jojoWebp from './assets/images/jojo.png?format=webp';
import jojoPng from './assets/images/jojo.png';
import ridgeWebp from './assets/images/ridge.png?format=webp';
import ridgePng from './assets/images/ridge.png';
import lauderWebp from './assets/images/lauder.png?format=webp';
import lauderPng from './assets/images/lauder.png';
import cecilWebp from './assets/images/cecil.png?format=webp';
import cecilPng from './assets/images/cecil.png';
import mappWebp from './assets/images/mapp.png?format=webp';
import mappPng from './assets/images/mapp.png';
import fosterWebp from './assets/images/foster.png?format=webp';
import fosterPng from './assets/images/foster.png';

const createSources = (webp, fallback) => ({ webp, fallback });

export const sharedImages = {
  headshot: createSources(headshotWebp, headshotPng),
  contactCard: createSources(contactCardWebp, contactCardJpeg),
  instructors: createSources(instructorsWebp, instructorsJpg),
  pool: createSources(poolWebp, poolJpg),
  headerSignature: createSources(headerSignatureWebp, headerSignaturePng),
  headerLogo: createSources(headerLogoWebp, headerLogoPng),
};

export const reviewImages = {
  nicoleWalton: createSources(nicoleWaltonWebp, nicoleWaltonJpg),
  gailRucker: createSources(gailRuckerWebp, gailRuckerPng),
  raquelJohnson: createSources(raquelJohnsonWebp, raquelJohnsonPng),
  boonieJohnson: createSources(boonieJohnsonWebp, boonieJohnsonJpg),
  kimberlyBurden: createSources(boonieJohnsonWebp, boonieJohnsonJpg),
  neNeFeaster: createSources(feasterWebp, feasterJpg),
  jenStowers: createSources(jenStowersWebp, jenStowersJpg),
  adeline: createSources(adelineWebp, adelineJpg),
  jojo: createSources(jojoWebp, jojoPng),
  ridge: createSources(ridgeWebp, ridgePng),
  lauder: createSources(lauderWebp, lauderPng),
  cecil: createSources(cecilWebp, cecilPng),
  mapp: createSources(mappWebp, mappPng),
  foster: createSources(fosterWebp, fosterPng),
};
