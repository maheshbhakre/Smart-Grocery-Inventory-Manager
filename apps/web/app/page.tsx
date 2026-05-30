export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Smart Grocery Inventory Manager
      </h1>

      <div className="mt-6 space-x-4">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}