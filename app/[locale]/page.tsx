import About from './_components/about';
import Chart from './_components/chart';
import Claim from './_components/claim';
import Donation from './_components/donation';
import Header from './_components/header';
import HowTo from './_components/how-to';
import Map from './_components/map';
import Miner from './_components/miner';
import Pledge from './_components/pledge';

export default async function IndexPage() {
  return (
    <>
      <Header id="首页" />
      <About id="项目介绍" />
      <HowTo id="如何购买" />
      {/* <Pledge id="质押挖矿" /> */}
      <Donation id="集体捐赠" />
      {/* <TokenModel id="代币模型" /> */}
      <Miner id="NFT挖矿" />
      {/* <Model id='代币模型'/> */}
      <Chart id="代币模型" />
      <Map id="路线图" />
    </>
  );
}
