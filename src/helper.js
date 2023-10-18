export function formatTimeWithGMT(dateString) {
    const date = new Date(dateString);
    const formattedHours = date.getUTCHours().toString().padStart(2, '0'); // Format hours with leading zeros
    const formattedMinutes = date.getUTCMinutes().toString().padStart(2, '0'); // Format minutes with leading zeros
    const period = date.getUTCHours() < 12 ? 'am' : 'pm'; // Determine AM/PM
    const offsetHours = Math.abs(date.getTimezoneOffset() / 60).toString().padStart(2, '0'); // Format offset hours with leading zeros
    const offsetMinutes = (date.getTimezoneOffset() % 60).toString().padStart(2, '0'); // Format offset minutes with leading zeros
    const offsetSign = date.getTimezoneOffset() >= 0 ? '-' : '+'; // Determine GMT offset sign

    return `${formattedHours}:${formattedMinutes}${period} (GMT${offsetSign}${offsetHours}:${offsetMinutes})`;
}

