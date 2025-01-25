// src/components/ui/button.jsx
export function Button({ children }) {
    return (
      <button style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>
        {children}
      </button>
    );
  }
  