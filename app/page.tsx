import { db } from '@/lib/firebase-admin';

export default async function Page() {
  const doc = await db.collection('system_deploy').doc('current_page').get();
  const content = doc.exists ? doc.data()?.content : '🌱 正在连接新加坡服务器...';

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
