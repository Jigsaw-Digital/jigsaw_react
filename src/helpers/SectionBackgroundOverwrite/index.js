export const SectionBackgroundOverwrite = (props) => {
    let layout = props.layout;

    function bgDecider(attrs) {
        let type = false;
        let className = false;
        let color = false;

        if (attrs.jd_overwrite_settings && layout.attrs.jd_overwrite_settings === 'set_colour') {
            type = 'class';

            if (attrs.jd_background_colour === 'gray') {
                className = 'bg-gray-100';
            } else {
                className = 'bg-' + attrs.jd_background_colour;
            }
        } else if (attrs.jd_overwrite_settings && layout.attrs.jd_overwrite_settings === 'custom_colour') {
            type = 'style';
            color = attrs.jd_background_custom;
        }

        return {
            type: type,
            className: className,
            color: color,
        }
    }

    let bg = bgDecider(layout.attrs);

    return (
        <section className={(bg.type === 'class' ? bg.className : '') + ' py-24'}
                 style={(bg.type === 'style' ? {backgroundColor: bg.color} : {})}>
            <div className="container mx-auto ">
                {props.children}
            </div>
        </section>
    )
}