import Sidebar from '../components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  // header: React.ReactNode;
  // toolbar: React.ReactNode;
  // modal: React.ReactNode;
}

export default function Layout({
  children,
  // header,
  // toolbar,
  // modal,
}: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
      {/* {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main> */}
    </>
  );
}
