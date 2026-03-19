import { db } from '@/lib/firebase-admin';

export default async function Page() {
  // 1. 去新加坡服务器（Firestore）抓取数据
  // 路径对应你在 Make.com 设置的 system_deploy / current_page
  const docRef = db.collection('system_deploy').doc('current_page');
  const doc = await docRef.get();
  
  // 2. 如果没抓到，显示加载中；抓到了，就显示你的“森林绿”代码
  const content = doc.exists ? doc.data()?.content : '<div style="color:#2D5A27; padding:50px; text-align:center; font-family:sans-serif;">🌱 正在从新加坡获取森林绿代码...</div>';

  return (
    <main>
      {/* 这一行是关键：它把你存在数据库里的 HTML 代码直接变回漂亮的网页 */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
