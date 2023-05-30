export const handleCardClick = (id, data, setSelectedCardId, setSelectedCardData) => {
    setSelectedCardId(id);
    setSelectedCardData(data);
    console.log('Selected card ID:', id);
  };

 