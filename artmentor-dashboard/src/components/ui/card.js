export const Card = ({ children, className }) => (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>{children}</div>
  );
  
  export const CardHeader = ({ children }) => <div className="px-6 py-4 border-b border-gray-200">{children}</div>;
  
  export const CardContent = ({ children }) => <div className="px-6 py-4">{children}</div>;
  
  export const CardTitle = ({ children }) => <h3 className="text-xl font-semibold text-gray-800">{children}</h3>;