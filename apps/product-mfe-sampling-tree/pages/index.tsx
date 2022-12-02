import Link from 'next/link';

const Index = () => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Link href={'/tree'}>
        <button
          style={{
            textAlign: 'center',
            height: '3rem',
            backgroundColor: '#33f',
            borderRadius: '0.5rem',
            minWidth: '250px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '1rem',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          View Tree
        </button>
      </Link>
    </section>
  );
};

export default Index;
