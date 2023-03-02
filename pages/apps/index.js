import AppList from "../../components/app/app-list";
import Banner from "../../components/banner";
import Head from "next/head";
import { getAllApps } from "../../quick-apps";

function Apps() {
  const allApps = getAllApps();

  return (
    <div>
      <Head>
        <title>Apps - QuickApps</title>
      </Head>
      <div className="mt-14 space-y-6">
        <Banner title="Quick Apps" />
        <div className=" flex flex-col items-center">
          <AppList apps={allApps} />
        </div>
      </div>
    </div>
  );
}

export default Apps;
