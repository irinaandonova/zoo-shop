exports.convertTime = (createdAt) => {
    let timestamp = new Date(createdAt);
            timestamp.setDate(timestamp.getDate() + 2);

            return timestamp.toLocaleDateString('bg-BG', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
}