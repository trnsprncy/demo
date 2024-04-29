"use client";
import ConsentProvider from "@demo/oss";

export default function Providers({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <>
      <ConsentProvider
        essentialTags={["security_storage"]}
        nonEssentialTags={["functionality_storage", "personalization_storage"]}
      >
        <div id="banner" className="fixed left-0 bottom-0 w-full h-10 p-2 bg-red-500 z-50">test</div>
      </ConsentProvider>
    </>
  );
}
