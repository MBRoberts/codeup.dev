
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Adlister Excercise">
		<meta name="author" content="Ben Roberts">

		<title>Post AD</title>

<!-- Bootstrap Core CSS -->
		<link href="/../css/bootstrap.min.css" rel="stylesheet">
		<link rel='stylesheet prefetch' href='http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.0/css/bootstrapValidator.min.css'>

<!-- Custom CSS -->
		<link href="css/heroic-features.css" rel="stylesheet">
		<link rel="stylesheet" href="/css/adlister.create.css">
		
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
<!-- Navigation -->
		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Adlister</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li>
							<a href="#">Register</a>
						</li>
						<li>
							<a href="#">Login</a>
						</li>
						<li>
							<a href="#">Create AD</a>
						</li>
						<li>
							<a href="#">Listings</a>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container -->
		</nav>
<!-- Page Content -->
		<div class="container">
			<form class="well form-horizontal" action="" method="POST"  id="contact_form">
				<fieldset>
<!-- Form Heading -->
					<legend>Post A Listing!</legend>
<!-- Text input name -->
					<div class="form-group">
						<label class="col-md-4 control-label">First Name</label>  
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
								<input  name="first_name" placeholder="First Name" class="form-control"  type="text">
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- Text input name -->
					<div class="form-group">
						<label class="col-md-4 control-label" >Last Name</label> 
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
								<input name="last_name" placeholder="Last Name" class="form-control"  type="text">
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- Text input email -->
				   <div class="form-group">
						<label class="col-md-4 control-label">E-Mail</label>  
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
								<input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- Text input movie -->   
					<div class="form-group">
						<label class="col-md-4 control-label">Movie</label>  
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-film"></i></span>
								<input name="movie" placeholder="Movie" class="form-control" type="text">
							 </div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- Text input prop -->
					<div class="form-group">
						<label class="col-md-4 control-label">Prop Used</label>  
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-sunglasses"></i></span>
								<input name="prop" placeholder="Prop" class="form-control"  type="text">
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- Text input price -->
					<div class="form-group">
						<label class="col-md-4 control-label">Price</label>  
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
								<input name="price" placeholder="$0.00" class="form-control"  type="text">
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- File input image -->
					<div class="form-group">
						<label class="col-md-4 control-label">Upload Image</label>  
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-file"></i></span>
								<input name="image" placeholder="Website or domain name" class="form-control" type="file">
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- radio checks shipping -->
					<div class="form-group">
						<label class="col-md-4 control-label">Shipping Included?</label>
						<div class="col-md-4">
							<div class="radio">
								<label><input type="radio" name="shipping" value="yes" /> Yes</label>
							</div>
							<div class="radio">
								<label><input type="radio" name="hosting" value="no" /> No</label>
							</div><!-- /.radio -->
						</div><!-- /.col-md-4 -->
					</div><!-- /.form-group -->
<!-- Text area description -->
					<div class="form-group">
						<label class="col-md-4 control-label">Item Description</label>
						<div class="col-md-4 inputGroupContainer">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
								<textarea class="form-control" name="comment" placeholder="Item Description"></textarea>
							</div><!-- /.input-group -->
						</div><!-- /.col-md-4 inputGroupContainer -->
					</div><!-- /.form-group -->
<!-- Success message -->
					<div class="alert alert-success" role="alert" id="success_message">
						Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for your posting, we will get back to you shortly.
					</div>
<!-- Button -->
					<div class="form-group">
						<label class="col-md-4 control-label"></label>
						<div class="col-md-4">
							<button type="submit" class="btn btn-warning" >Post <span class="glyphicon glyphicon-cloud-upload"></span></button>
						</div>
					</div><!-- /.form-group -->
				</fieldset>
			</form>
		</div><!-- /.container -->
		<hr>
<!-- Contact -->
		<div class="banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<h2>Contact Adlister:</h2><br>
						<a href="mailto:Adlister@example.com" class="contact-email">adlister@example.com</a>
					</div>
					<div class="col-lg-6">
						<ul class="list-inline banner-social-buttons">
							<li>
								<a href="#" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
							</li>
							<li>
								<a href="#" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
							</li>
							<li>
								<a href="#" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
							</li>
							<li>
								<a href="#" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
							</li>
						</ul>
					</div><!-- /.dol-lg-6 -->
				</div><!-- /.row -->
			</div><!-- /.container -->
		</div><!-- /.banner -->
<!-- Footer -->
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<ul class="list-inline">
							<li>
								<a href="#">Home</a>
							</li>
							<li class="footer-menu-divider">&sdot;</li>
							<li>
								<a href="#">Register</a>
							</li>
							<li class="footer-menu-divider">&sdot;</li>
							<li>
								<a href="#">Create Ad</a>
							</li>
							<li class="footer-menu-divider">&sdot;</li>
							<li>
								<a href="#">Listings</a>
							</li>
						</ul>
						<p class="copyright text-muted small">Copyright &copy; Adlister Inc 2016. All Rights Reserved</p>
					</div><!-- /.col-lg-12 -->
				</div><!-- /.row -->
			</div><!-- /.container -->
		</footer>

<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/js/bootstrapvalidator.min.js'></script>

        <script src="js/adlister.create.js"></script>
	</body>
</html>
