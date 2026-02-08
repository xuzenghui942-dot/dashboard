import SideNav from "@/app/ui/dashboard/sidenav";
/** 佈局組件不會重新渲染 頁面PAGE組件會重新渲染
 * 使用根部局来修改<html> <body> 标签 添加元数据metadata
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
