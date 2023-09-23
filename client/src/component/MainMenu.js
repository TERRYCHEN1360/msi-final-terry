// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import {connect} from "react-redux"
// import {getMenu} from "../action/menu.action";
// import Menudialog from "../component/Menudialog"
//
//
//
// const styles = theme => ({
//     appBar: {
//         position: 'relative',
//     },
//     icon: {
//         marginRight: theme.spacing.unit * 2,
//     },
//     heroUnit: {
//         backgroundColor: theme.palette.background.paper
//     },
//     heroContent: {
//         maxWidth: 600,
//         margin: '0 auto',
//         padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
//     },
//     heroButtons: {
//         marginTop: theme.spacing.unit * 4,
//     },
//     layout: {
//         width: 'auto',
//         marginLeft: theme.spacing.unit * 3,
//         marginRight: theme.spacing.unit * 3,
//         [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//             width: 1100,
//             marginLeft: 'auto',
//             marginRight: 'auto',
//         },
//     },
//     cardGrid: {
//         padding: `${theme.spacing.unit * 8}px 0`,
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//     },
//     footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing.unit * 6,
//     },
// });
//
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//
// function Album(props) {
//     const { classes } = props;
//     // props.getMenu().then( () =>{
//     //     console.log(props)
//     // })
//
//
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <main>
//                 {/* Hero unit */}
//                 <div className={classes.heroUnit}>
//                     <div className={classes.heroContent}>
//                         <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//                             Main Menu
//                         </Typography>
//                         <Typography variant="h6" align="center" color="textSecondary" paragraph>
//                             Sichuan cuisine is one of the most famous in China, with centuries of evolution, with efforts and talents of many generations. Taste is what differentiates Sichuan food from the rest, taste is the soul of Sichuan food. One dish, one style, hundred dishes, hundred  styles. As the saying goes: China is a land of food and Sichuan , a land of tastes.
//                             Throughout history much has been changed, China and Chinese, almost everything, every aspect, except Chinese food. Arguably it is Chinese cooks that have preserved the root of Chinese culture.
//                         </Typography>
//                         {/*<div className={classes.heroButtons}>*/}
//                             {/*<Grid container spacing={16} justify="center">*/}
//                                 {/*<Grid item>*/}
//                                     {/*<Button variant="contained" color="primary">*/}
//                                         {/*Main call to action*/}
//                                     {/*</Button>*/}
//                                 {/*</Grid>*/}
//                                 {/*<Grid item>*/}
//                                     {/*<Button variant="outlined" color="primary">*/}
//                                         {/*Secondary action*/}
//                                     {/*</Button>*/}
//                                 {/*</Grid>*/}
//                             {/*</Grid>*/}
//                         {/*</div>*/}
//                     </div>
//                 </div>
//                 <div className={classNames(classes.layout, classes.cardGrid)}>
//                     {/* End hero unit */}
//                     <Grid container spacing={40}>
//
//                             <Grid item  sm={6} md={4} lg={3}>
//                                 <Card className={classes.card}>
//                                     <CardMedia
//                                         className={classes.cardMedia}
//                                         image="https://s3.us-east-2.amazonaws.com/msi-final-terry-resources/Ma-Po-Tofu_14553.jpg" // eslint-disable-line max-len
//                                         title="Image title"
//                                     />
//                                     <CardContent className={classes.cardContent}>
//                                         <Typography gutterBottom variant="h5" component="h2">
//                                             Tofu
//                                         </Typography>
//                                         <Typography>
//                                             Authentic Szechuan style mapo tofu is one of the branding dishes of Szechuan cuisine. It is spicy, numbing, hot, aromatic and tender. Making the yummiest mapo tofu at home for several bowls of steamed rice.
//                                         </Typography>
//                                     </CardContent>
//
//                                 </Card>
//                             </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9viL9WPkw0J9z08KSyybIwiVF9V3T1sUIl6Jx4cJY2JJM9zD" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://media-cdn.tripadvisor.com/media/photo-s/10/b5/f9/d4/tianfu-sichuan-cuisine.jpg" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://i.hungrygowhere.com/business/3a/67/12/00/A5_800x0_crop_800x800_6dc247de83.jpg" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1yKMtOIcwugrDACs2Fpf_ifSKHoXfkUf66Y_qZDQcjsmFP2U" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://www.sichuantravelguide.com/assets/images/food/facts/boiled-spicy-pork-1.jpg" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://img.lovepik.com/photo/50090/0708.jpg_wh300.jpg" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0NbYisYlKOYUtd5s8-1MiP4jFaLf2x-9VaTXFMAZP7bezEpeeg" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2x6P_ZZleYq-8PV_n4M4uYN4ht5D6ppR_s1xBHAjSh3DUHB8P" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2x6P_ZZleYq-8PV_n4M4uYN4ht5D6ppR_s1xBHAjSh3DUHB8P" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://static.chope.co/uploads/2019/01/Dan_Dan_Noodles_jpg_1547694591.jpg?date=20190514" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid> <Grid item  sm={6} md={4} lg={3}>
//                         <Card className={classes.card}>
//                             <CardMedia
//                                 className={classes.cardMedia}
//                                 image="https://static.chope.co/uploads/2019/01/Dan_Dan_Noodles_jpg_1547694591.jpg?date=20190514" // eslint-disable-line max-len
//                                 title="Image title"
//                             />
//                             <CardContent className={classes.cardContent}>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     Heading
//                                 </Typography>
//                                 <Typography>
//                                     This is a media card. You can use this section to describe the content.
//                                 </Typography>
//                             </CardContent>
//
//                         </Card>
//                     </Grid>
//
//                     </Grid>
//                 </div>
//             </main>
//             {/* Footer */}
//             <footer className={classes.footer}>
//                 <Typography variant="h6" align="center" gutterBottom>
//                     Footer
//                 </Typography>
//                 <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//                     Something here to give the footer a purpose!
//                 </Typography>
//             </footer>
//             {/* End footer */}
//         </React.Fragment>
//     );
// }
//
// Album.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
//
// function mapStateToProps(appState){
//     return{
//         menus:appState.menu
//     }
// }
//
// export default connect(mapStateToProps,{getMenu})(withStyles(styles)(Album));