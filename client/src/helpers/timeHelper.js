const convertTime = (createdAt, additionalTime) => {
    let timestamp = new Date(createdAt);
            timestamp.setDate(timestamp.getDate() + additionalTime);

            return timestamp.toLocaleDateString('bg-BG', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
}

export default convertTime;