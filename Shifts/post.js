import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('post_shift')
        .setDescription('Post an Empyk Stores shift')
        .addStringOption(option => 
            option.setName('time')
            .setDescription('Shift time (e.g. 12:00 PM)')
            .setRequired(true)),
    async execute(interaction) {
        const time = interaction.options.getString('time');
        const roleId = "1509730072809050352"; 
        
        const embed = new EmbedBuilder()
            .setTitle("🛒 Empyk Stores - Shift Announcement")
            .setColor(0x2b2d31)
            .addFields(
                { name: "🎙️ Host", value: "*Unclaimed*", inline: true },
                { name: "🕒 Time", value: time, inline: true }
            );

        await interaction.reply({ content: `<@&${roleId}>`, embeds: [embed] });
    },
};
