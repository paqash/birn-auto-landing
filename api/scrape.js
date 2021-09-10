import fetch from 'node-fetch';
import cheerio from 'cheerio';

const getTenders = async () => {
  try {
    let i = 0;
    for (let yr = 2018; yr <= new Date().getFullYear(); yr++) {

      var gn = await getTendersByYear(yr);
      i += gn.replaceAll('.', '');
    }

    return i;
  } catch (ex) {
    console.log(ex)
    return 414;
  }
}

const getTendersByYear = async (year) => {
  const res = await fetch(`http://auta.detektor.ba/${year}/tenderi`,  {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors'});
  const data = await res.text();
  const $ = cheerio.load(data);
  return $('#ContentPlaceHolder1_s_br_tenderi').text();
}

export const tenders = await getTenders();
