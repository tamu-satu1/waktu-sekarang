const Waktu = {
    duaDigit: (angka) => { if (angka.length < 2) { return '0'.concat(angka) } else { return angka } },
    waktu: () => { return String(new Date()) },
    tahun: () => { return String(new Date().getFullYear()) },
    tanggal: () => { return String(new Date().getDate()) },
    bulan: () => { return Waktu.duaDigit(String(new Date().getMonth())) },
    hari: () => { return Waktu.duaDigit(String(new Date().getDay())) },
    jam: () => { return Waktu.duaDigit(String(new Date().getHours())) },
    menit: () => { return Waktu.duaDigit(String(new Date().getMinutes())) },
    detik: () => { return Waktu.duaDigit(detik = String(new Date().getSeconds())) },
    namaHari: () => {
        switch (Number(Waktu.hari())) {
            case 0: return 'Minggu'
            case 1: return 'Senin'
            case 2: return 'Selasa'
            case 3: return 'Rabu'
            case 4: return 'Kamis'
            case 5: return 'Jumat'
            case 6: return 'Sabtu'
            default: return undefined
        }
    },
    namaBulan: () => {
        switch (Number(Waktu.bulan())) {
            case 0:
                return 'Januari'
            case 1:
                return 'Februari'
            case 2:
                return 'Maret'
            case 3:
                return 'April'
            case 4:
                return 'Mei'
            case 5:
                return 'Juni'
            case 6:
                return 'Juli'
            case 7:
                return 'Agustus'
            case 8:
                return 'September'
            case 9:
                return 'Oktober'
            case 10:
                return 'November'
            case 11:
                return 'Desember'
            default:
                return undefined
        }
    },
    sekarang: () => { return `${Waktu.namaHari()} ${Waktu.tanggal()} ${Waktu.namaBulan()} ${Waktu.tahun()} ${Waktu.jam()}:${Waktu.menit()}:${Waktu.detik()}` }
}

