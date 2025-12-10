"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Eye,
  Users,
  Activity,
  Clock,
} from "lucide-react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const PLACEHOLDER = "—";

export default function AdminDashboard() {
  const [data, setData] = useState(null);   // كل الداتا الراجعة من API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/stats", {
          method: "GET",
          credentials: "include",
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("DASHBOARD_LOAD_ERR", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <main className="p-6">
        <div className="text-center py-20 text-[#5F6F61] font-semibold">
          جاري تحميل بيانات لوحة التحكم...
        </div>
      </main>
    );
  }

  const stats = data?.stats || {};
  const latestPosts = data?.latestPosts || [];
  const trafficData = data?.weeklyVisits || [];

  const articlesData = [
    { name: "منشور", count: stats.publishedPosts ?? 0 },
    {
      name: "مسودات",
      count:
        (stats.totalPosts ?? 0) - (stats.publishedPosts ?? 0),
    },
  ];

  return (
    <main className="p-6 space-y-6">

      {/* العنوان */}
      <section>
        <h1 className="text-3xl font-bold text-[#171717] flex items-center gap-2">
          لوحة التحكم
          <Activity className="w-6 h-6 text-[#5F6F61]" />
        </h1>
        <p className="text-sm text-[#778873] mt-2">
          نظرة عامة على أداء الموقع، المقالات، وزيارات المستخدمين.
        </p>
      </section>

      {/* بطاقات الإحصائيات */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <StatCard
          label="إجمالي المقالات"
          value={stats.totalPosts ?? PLACEHOLDER}
          icon={<FileText className="w-5 h-5 text-[#5F6F61]" />}
          sub={
            data
              ? `${stats.publishedPosts ?? 0} منشور / ${
                  (stats.totalPosts ?? 0) - (stats.publishedPosts ?? 0)
                } مسودة`
              : PLACEHOLDER
          }
        />

        <StatCard
          label="مشاهدات المقالات"
          value={stats.views ?? PLACEHOLDER}
          icon={<Eye className="w-5 h-5 text-[#5F6F61]" />}
          sub="إجمالي المشاهدات المسجلة"
        />

        <StatCard
          label="عدد الزوار"
          value={PLACEHOLDER}
          icon={<Users className="w-5 h-5 text-[#5F6F61]" />}
          sub="سيتم ربطها لاحقًا مع Analytics"
        />

        <StatCard
          label="متوسط وقت القراءة"
          value={PLACEHOLDER}
          icon={<Clock className="w-5 h-5 text-[#5F6F61]" />}
          sub="—"
        />
      </section>

      {/* الرسوم البيانية */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart – زيارات الأسبوع من الـ backend */}
        <div className="bg-white border border-[#D2DCB6] rounded-2xl p-4 shadow">
          <h2 className="font-semibold text-[#171717] mb-3">
            زيارات الأسبوع (حقيقية من قاعدة البيانات)
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trafficData}>
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#5F6F61"
                strokeWidth={2}
              />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart – حالة المقالات من الـ backend */}
        <div className="bg-white border border-[#D2DCB6] rounded-2xl p-4 shadow">
          <h2 className="font-semibold text-[#171717] mb-3">
            حالة المقالات
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={articlesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#A1BC98" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </section>

      {/* آخر المقالات */}
      <section className="bg-white border border-[#D2DCB6] rounded-2xl p-4 shadow">
        <h2 className="font-semibold text-[#171717] mb-4">أحدث المقالات</h2>

        {!latestPosts.length && (
          <p className="text-[#778873] text-sm">لا توجد مقالات بعد.</p>
        )}

        {latestPosts.map((post, i) => (
          <div key={post._id || i} className="border-b border-[#E2E9CF] py-3">
            <p className="font-semibold">{post.title}</p>
            <p className="text-xs text-[#778873] mt-1">
              {post.status} — {post.views ?? 0} مشاهدة —{" "}
              {post.createdAt?.slice(0, 10)}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

/* كومبوننت إعادة استخدام للكروت */
function StatCard({ label, value, icon, sub }) {
  return (
    <div className="bg-white border border-[#D2DCB6] rounded-2xl p-4 shadow flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#778873]">{label}</p>
        <div className="p-2 bg-[#A1BC98]/20 rounded-lg border border-[#A1BC98]/40">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-[#171717]">{value}</p>
      <p className="text-xs text-[#778873]">{sub}</p>
    </div>
  );
}
